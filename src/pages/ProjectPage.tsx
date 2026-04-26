import { useParams, Link, Navigate } from "react-router"
import { getProjectBySlug } from "../data/projects"
import { Cmd, Chip } from "../components/shared"

const isVideoSrc = (src: string) => /\.(mp4|webm|mov|m4v|ogv)(\?.*)?$/i.test(src)

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/" replace />

  const { media, links, sections, summary } = project
  const gallery = media.gallery

  return (
    <>
      <Link
        to="/#projects"
        className="font-mono text-sm text-term-dim hover:text-amber-accent transition-colors inline-flex items-center gap-2 mb-6"
      >
        <span className="text-amber-accent">←</span> cd ../projects
      </Link>

      <Cmd cmd={`cat projects/${project.slug}/README.md`} />

      <div className="mt-5 font-mono text-xs text-term-dimmer tracking-[0.15em] mb-1">
        {project.year} · {project.role}
      </div>
      <h1 className="font-mono text-5xl text-amber-accent font-bold glow-text mb-3">
        {project.name}
      </h1>
      <p className="font-mono text-lg text-term-fg leading-relaxed max-w-[70ch] mb-6">
        {project.desc}
      </p>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {links.map((l, i) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className={`font-mono text-sm px-4 py-[9px] rounded-[3px] inline-flex items-center gap-2 transition-colors ${i === 0
                ? "border border-amber-accent bg-amber-soft text-amber-accent hover:bg-amber-dim/40"
                : "border border-term-border bg-ink-panel text-term-fg hover:border-amber-accent hover:text-amber-accent"
                }`}
            >
              ./{l.label.replace(/\s+/g, "_").toLowerCase()} <span>↗</span>
            </a>
          ))}
        </div>
      )}

      {summary && (
        <div className="border border-term-border bg-ink-panel rounded-[4px] p-5 sm:p-6 mb-10">
          <div className="font-mono text-xs text-term-dimmer tracking-[0.15em] mb-2">
            <span className="text-amber-accent">// </span>OVERVIEW
          </div>
          <p className="font-mono text-base text-term-fg leading-[1.8]  m-0">
            {summary}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-12">
        <div>
          <div className="font-mono text-xs text-term-dimmer tracking-[0.15em] mb-3">
            <span className="text-amber-accent">// </span>HIGHLIGHTS
          </div>
          <ul className="m-0 p-0 list-none font-mono text-base text-term-fg leading-[1.8] mb-10">
            {project.highlights.map((h) => (
              <li key={h} className="pl-4 relative mb-1.5">
                <span className="absolute left-0 text-amber-accent">▸</span>
                {h}
              </li>
            ))}
          </ul>

          {sections.length > 0 && (
            <div className="space-y-12 mb-8">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <div className="font-mono text-xs text-term-dimmer tracking-[0.15em] mb-2">
                    <span className="text-amber-accent">// </span>
                    {sec.title.toUpperCase()}
                  </div>
                  <h2 className="font-mono text-2xl text-term-fg font-semibold mb-3">
                    {sec.title}
                  </h2>
                  {sec.description && (
                    <p className="font-mono text-base text-term-fg leading-[1.75] max-w-[70ch] mb-5">
                      {sec.description}
                    </p>
                  )}
                  <div
                    className={
                      project.portrait
                        ? "flex flex-wrap gap-5"
                        : "flex flex-col gap-5"
                    }
                  >
                    {sec.screenshots.map((s, i) => (
                      <figure
                        key={s.src + i}
                        className={`border border-term-border bg-ink-panel rounded-[4px] p-[6px] overflow-hidden group transition-colors hover:border-amber-accent ${
                          project.portrait ? "w-full sm:w-[260px]" : ""
                        }`}
                      >
                        {isVideoSrc(s.src) ? (
                          <video
                            src={s.src}
                            poster={s.poster}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-auto rounded-[2px] bg-ink-deep"
                          />
                        ) : (
                          <img
                            src={s.src}
                            alt={s.caption || `${sec.title} screenshot ${i + 1}`}
                            loading="lazy"
                            className="w-full h-auto rounded-[2px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                          />
                        )}
                        {s.caption && (
                          <figcaption className="font-mono text-xs text-term-dimmer px-2 pt-2 pb-1">
                            <span className="text-amber-accent">▸</span> {s.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {gallery.length > 0 && (
            <>
              <div className="font-mono text-xs text-term-dimmer tracking-[0.15em] mb-3">
                <span className="text-amber-accent">// </span>GALLERY
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gallery.map((src, i) => (
                  <div
                    key={src + i}
                    className="border border-term-border bg-ink-panel rounded-[3px] p-[4px] overflow-hidden group"
                  >
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto rounded-[2px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {media.video && (
            <div className="border border-term-border bg-ink-panel rounded-[4px] p-[6px] mt-6 overflow-hidden">
              <video
                src={media.video}
                controls
                playsInline
                className="w-full h-auto rounded-[2px]"
              />
            </div>
          )}
        </div>

        <aside className="border border-term-border bg-ink-panel rounded-[4px] p-5 font-mono text-sm h-fit lg:sticky lg:top-24">
          <div className="text-xs text-term-dimmer tracking-[0.15em] mb-3">
            <span className="text-amber-accent">// </span>META
          </div>
          <div className="grid grid-cols-[70px_1fr] gap-y-2.5 items-baseline">
            <div className="text-term-dim">role</div>
            <div className="text-term-fg">{project.role}</div>
            <div className="text-term-dim">year</div>
            <div className="text-term-fg">{project.year}</div>
          </div>

          <div className="text-xs text-term-dimmer tracking-[0.15em] mt-5 mb-2">
            <span className="text-amber-accent">// </span>STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </aside>
      </div>
    </>
  )
}
