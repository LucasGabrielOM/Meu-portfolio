import { useEffect, useState, useMemo } from "react";
import { supabase } from "../../supabase";
import {
  MessageSquare,
  Pin,
  Trash2,
  PinOff,
  Calendar,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PAGE_SIZE = 10;

const Card = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500 pointer-events-none" />
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/12 rounded-2xl h-full">
      {children}
    </div>
  </div>
);

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchComments = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("portfolio_comments")
      .select("*")
      .order("is_pinned", { ascending: false })
      .order("created_at", { ascending: false });
    setComments(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Reiniciar página quando o filtro/pesquisa mudar
  useEffect(() => {
    setPage(1);
  }, [filter, search]);

  const pin = async (id, value) => {
    await supabase
      .from("portfolio_comments")
      .update({ is_pinned: value })
      .eq("id", id);
    fetchComments();
  };

  const remove = async (id) => {
    if (!confirm("Excluir este comentário?")) return;
    await supabase.from("portfolio_comments").delete().eq("id", id);
    fetchComments();
  };

  const pinnedCount = comments.filter((c) => c.is_pinned).length;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Filtro + pesquisa
  const filtered = useMemo(() => {
    let result =
      filter === "pinned" ? comments.filter((c) => c.is_pinned) : comments;
    const q = search.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (c) =>
          (c.user_name || "").toLowerCase().includes(q) ||
          (c.content || "").toLowerCase().includes(q),
      );
    }
    return result;
  }, [comments, filter, search]);

  // Paginação
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-start sm:items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-50 pointer-events-none" />
            <div className="relative w-9 h-9 bg-[#030014] rounded-xl border border-white/15 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Comentários
            </h1>
            <p className="text-gray-500 text-xs">
              {comments.length} total · {pinnedCount} fixados
            </p>
          </div>
        </div>

        {/* Abas de filtro */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
          {[
            { value: "all", label: "Todos", count: comments.length },
            { value: "pinned", label: "Fixados", count: pinnedCount },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                filter === tab.value
                  ? "bg-gradient-to-r from-indigo-500/25 to-purple-500/20 border border-indigo-500/35 text-white font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab.label}
              <span
                className={`px-1.5 py-0.5 rounded-full text-xs ${
                  filter === tab.value
                    ? "bg-indigo-500/25 text-indigo-300"
                    : "bg-white/8 text-gray-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Linha de estatísticas */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total", value: comments.length, color: "text-indigo-400" },
          { label: "Fixados", value: pinnedCount, color: "text-purple-400" },
          {
            label: "Não Fixados",
            value: comments.length - pinnedCount,
            color: "text-blue-400",
          },
        ].map((stat) => (
          <Card key={stat.label}>
            <div className="p-3 sm:p-4">
              <p className="text-gray-500 text-xs mb-1">{stat.label}</p>
              <p className={`text-xl sm:text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Barra de pesquisa */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome ou mensagem..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-gray-200 placeholder-gray-600 text-sm outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Contagem de resultados durante pesquisa */}
      {search && (
        <p className="text-xs text-gray-500 -mt-3">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} para “
          {search}”
        </p>
      )}

      {/* Lista de Comentários */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-7 h-7 border-2 border-white/10 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      ) : paginated.length === 0 ? (
        <Card>
          <div className="p-14 text-center">
            <MessageSquare className="w-10 h-10 text-gray-700 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">
              {search
                ? "Nenhum comentário corresponde à sua pesquisa."
                : filter === "pinned"
                  ? "Nenhum comentário fixado."
                  : "Nenhum comentário ainda."}
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-2.5">
          {paginated.map((comment) => (
            <div key={comment.id} className="relative group">
              {comment.is_pinned && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-15 pointer-events-none" />
              )}
              <div
                className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl px-4 py-4 sm:px-5 transition-all duration-200 ${
                  comment.is_pinned
                    ? "border-indigo-500/30"
                    : "border-white/10 hover:border-white/18"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                    <img
                      src={comment.profile_image || "/default-avatar.jpg"}
                      alt="Avatar"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-sm font-semibold text-white">
                        {/* Destacar correspondência da pesquisa no nome */}
                        {highlightMatch(
                          comment.user_name || "Anônimo",
                          search,
                        )}
                      </span>
                      {comment.is_pinned && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-xs">
                          <Pin className="w-2.5 h-2.5" /> Fixado
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-gray-600 text-xs ml-auto shrink-0">
                        <Calendar className="w-3 h-3" />
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {/* Destacar correspondência da pesquisa no conteúdo */}
                      {highlightMatch(comment.content || "", search)}
                    </p>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => pin(comment.id, !comment.is_pinned)}
                      title={comment.is_pinned ? "Desafixar" : "Fixar"}
                      className={`p-2 rounded-lg border transition-all duration-200 ${
                        comment.is_pinned
                          ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20"
                          : "border-white/10 text-gray-500 hover:text-indigo-400 hover:border-indigo-500/25"
                      }`}
                    >
                      {comment.is_pinned ? (
                        <PinOff className="w-3.5 h-3.5" />
                      ) : (
                        <Pin className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => remove(comment.id)}
                      className="p-2 rounded-lg border border-white/10 text-gray-500 hover:text-red-400 hover:border-red-500/20 hover:bg-red-500/5 transition-all duration-200"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-3 pt-2">
          <p className="text-xs text-gray-500">
            Mostrando {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filtered.length)} de {filtered.length}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Números das páginas */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1,
              )
              .reduce((acc, p, i, arr) => {
                if (i > 0 && arr[i - 1] !== p - 1) acc.push("...");
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === "..." ? (
                  <span
                    key={`dots-${i}`}
                    className="px-2 text-gray-600 text-xs"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`min-w-[32px] h-8 px-2 rounded-lg text-xs border transition-all duration-200 ${
                      page === p
                        ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300 font-medium"
                        : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {p}
                  </button>
                ),
              )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Destacar texto correspondente
function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const regex = new RegExp(
    `(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-indigo-500/30 text-indigo-200 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}
