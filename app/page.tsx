'use client'

import {
  ArrowLeft,
  Award,
  BarChart3,
  ChevronRight,
  Edit3,
  Heart,
  Search,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Trash2,
  TrendingUp,
  Zap,
} from 'lucide-react'

const statGroups = [
  {
    title: 'Ofensiva',
    items: [['69', 'Centros', 'gold'], ['86', 'Definición', 'green'], ['79', 'Precisión cabeza', 'green'], ['75', 'Pases cortos', 'green'], ['77', 'Voleas', 'green']],
  },
  {
    title: 'Técnica',
    items: [['79', 'Regates', 'green'], ['66', 'Efecto', 'gold'], ['53', 'Precisión faltas', 'gold'], ['59', 'Pases largos', 'gold'], ['83', 'Control del balón', 'green']],
  },
  {
    title: 'Movimiento',
    items: [['94', 'Aceleración', 'green'], ['95', 'Velocidad', 'green'], ['82', 'Agilidad', 'green'], ['84', 'Reflejos', 'green'], ['85', 'Equilibrio', 'green']],
  },
  {
    title: 'Potencia',
    items: [['85', 'Potencia', 'green'], ['93', 'Salto', 'green'], ['79', 'Resistencia', 'green'], ['80', 'Fuerza', 'green'], ['76', 'Tiros lejanos', 'green']],
  },
  {
    title: 'Mentalidad',
    items: [['74', 'Agresividad', 'green'], ['26', 'Intercep.', 'red'], ['85', 'Pos. ataque', 'green'], ['69', 'Visión', 'gold'], ['75', 'Penaltis', 'green'], ['81', 'Compostura', 'green']],
  },
  {
    title: 'Defensa',
    items: [['23', 'Conciencia defensiva', 'red'], ['23', 'Robos', 'red'], ['19', 'Entrada agresive', 'red']],
  },
]

function Score({ value, tone }: { value: string; tone: string }) {
  return <span className={`score score-${tone}`}>{value}</span>
}

function StatGroup({ title, items }: { title: string; items: string[][] }) {
  return (
    <section className="stat-group">
      <h3>{title}</h3>
      <div className="stat-list">
        {items.map(([value, label, tone]) => (
          <div className="stat-row" key={label}>
            <Score value={value} tone={tone} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function MiniPanel({ icon, title, children, className = '' }: { icon: React.ReactNode; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`mini-panel ${className}`}>
      <h2>{icon}<span>{title}</span></h2>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <main className="player-page">
      <div className="page-shell">
        <div className="topbar">
          <button className="back-button" aria-label="Volver"><ArrowLeft /></button>
          <div className="crumbs"><span>Mercado</span><ChevronRight /><strong>Ficha de jugador</strong></div>
          <div className="top-actions"><button className="icon-button" aria-label="Añadir a favoritos"><Heart /></button><button className="compare-button"><Zap /> Comparar con</button><label className="search-field"><Search /><input aria-label="Buscar jugador" placeholder="Buscar jugador..." /></label></div>
        </div>

        <section className="hero-grid">
          <div className="identity-card">
            <div className="overall">94</div>
            <div className="identity-copy">
              <div className="name-line"><h1>JON DOE</h1><span className="ball-icon">◉</span><span className="shirt-icon">◆</span><span className="shield-icon"><Shield /></span></div>
              <div className="position-tags"><span>DC</span><span>ED</span><span>EI</span></div>
              <p>175cm · 79kg · Pierna hábil: Derecha</p>
              <p>Valor: <strong>58.5M€</strong> <i /> No Boosts: <strong>0</strong></p>
            </div>
          </div>
          <div className="performance-stack">
            <h2>Rendimiento</h2>
            <div className="performance-summary"><span>Partidos: <b>1</b></span><span>Goles: <b>0</b></span><span>Asistencias: <b>0</b></span><span>Paradas: <b>0</b></span><span>MVP: <b>0</b></span><span>Game Rating: <b className="rating">7.40</b></span></div>
            <div className="history-card"><h3>Histórico por Equipo</h3><div className="history-head"><span>EQUIPO</span><span>PJ</span><span>G</span><span>A</span><span>P</span><span>MVP</span><span>RATING</span></div><div className="history-row"><span>◈ &nbsp;Tune Squack</span><span>1</span><span>0</span><span>0</span><span>0</span><span>0</span><b>7.40</b></div></div>
          </div>
        </section>

        <section className="stats-card">
          <div className="section-heading"><div><p className="eyebrow">ATRIBUTOS DEL JUGADOR</p><h2>Stats EA Sports</h2></div><span className="overall-chip">Overall <b>94</b></span></div>
          <div className="stats-grid">{statGroups.map((group) => <StatGroup key={group.title} {...group} />)}</div>
          <div className="keeper-row"><h3>Portero</h3>{[['9', 'Estirada'], ['8', 'Paradas'], ['10', 'Saques'], ['8', 'Colocación'], ['13', 'Reflejos']].map(([v, l]) => <div className="keeper-stat" key={l}><Score value={v} tone="red" /><span>{l}</span></div>)}</div>
          <div className="playstyle"><h3>Play Style</h3><div className="style-tags"><span className="style-pink"><Sparkles /> Tiro de calidad</span><span className="style-green"><TrendingUp /> Regate veloz</span><span className="style-gold"><Zap /> Paso rápido</span><span className="style-purple"><Star /> Trivela</span></div></div>
        </section>

        <section className="lower-grid">
          <MiniPanel icon={<BarChart3 />} title="Movimientos" className="moves-panel"><div className="movement-row"><span className="movement-type green-tag">SUBASTA</span><div><strong>Agente Libre → Tune Squack</strong><small>Thu Aug 27 2026</small></div><b>58M€</b><small>Thu Aug 27 2026</small><Edit3 className="edit-icon" /><Trash2 className="delete-icon" /></div><div className="movement-row"><span className="movement-type pink-tag">CLÁUSULA</span><div><strong>Bayern de los Caídos → Tune Squack</strong><small>Fri Aug 07 2026</small></div><b>41.5M€</b><small>Fri Aug 07 2026</small></div></MiniPanel>
          <MiniPanel icon={<Sparkles />} title="Víctima Favorita"><p className="muted">Rival más goleado</p><div className="victim"><span>⚽</span><strong>6 goles contra<br /><em>Bayern de los Caídos</em></strong></div></MiniPanel>
          <MiniPanel icon={<Star />} title="Grandes Hitos"><div className="milestone"><span>⚽</span><div><strong>Repóker (5 goles)</strong><small>vs ⚽⚽⚽⚽</small></div></div><div className="milestone"><span>⚽</span><div><strong>Repóker (5 goles)</strong><small>vs Bayern de los Caídos...</small></div></div></MiniPanel>
          <MiniPanel icon={<Trophy />} title="Palmarés"><div className="honor"><span>Máximo Goleador</span><b>Torneo Nuevo Formato Octubre 2026</b><small>Tune Squack</small></div><div className="honor"><span>XI Ideal Torneo - Delantero</span><b>Torneo Nuevo Formato Octubre 2026</b><small>Tune Squack</small></div><div className="honor"><span>MVP Eliminatoria</span><b>Tune Squack</b><small>Tune Squack</small></div></MiniPanel>
        </section>

        <button className="edit-sheet"><Edit3 /> Editar Ficha</button>
      </div>
    </main>
  )
}
