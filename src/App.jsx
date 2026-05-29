import './App.css'

const TEMP_DATA = [
  { year: '1980', anomaly: 0.26 },
  { year: '1985', anomaly: 0.11 },
  { year: '1990', anomaly: 0.44 },
  { year: '1995', anomaly: 0.39 },
  { year: '2000', anomaly: 0.33 },
  { year: '2005', anomaly: 0.67 },
  { year: '2010', anomaly: 0.72 },
  { year: '2015', anomaly: 0.87 },
  { year: '2016', anomaly: 1.01 },
  { year: '2017', anomaly: 0.91 },
  { year: '2018', anomaly: 0.83 },
  { year: '2019', anomaly: 0.98 },
  { year: '2020', anomaly: 1.02 },
  { year: '2021', anomaly: 0.85 },
  { year: '2022', anomaly: 0.89 },
  { year: '2023', anomaly: 1.17 },
  { year: '2024', anomaly: 1.29 },
]

const TOPICS = [
  {
    icon: '🌊',
    title: 'Rising Sea Levels',
    desc: 'Global mean sea level has risen ~20 cm since 1900, accelerating since the 1990s. Coastal cities face increasing flood risk.',
    badge: 'critical',
    label: 'Critical',
  },
  {
    icon: '🔥',
    title: 'Extreme Heat Events',
    desc: 'Heatwaves are becoming more frequent, longer, and more intense, threatening human health and ecosystems.',
    badge: 'critical',
    label: 'Critical',
  },
  {
    icon: '🧊',
    title: 'Arctic Ice Melt',
    desc: 'Arctic sea ice extent is declining ~13% per decade. Feedback loops amplify warming as reflective ice is replaced by dark ocean.',
    badge: 'high',
    label: 'High Risk',
  },
  {
    icon: '🌧️',
    title: 'Altered Precipitation',
    desc: 'Climate change intensifies the water cycle — wet regions get wetter, dry regions get drier, disrupting agriculture and water supply.',
    badge: 'high',
    label: 'High Risk',
  },
  {
    icon: '🌿',
    title: 'Biodiversity Loss',
    desc: 'Species face extinction as habitats shift faster than they can adapt. Coral bleaching has damaged over 50% of the Great Barrier Reef.',
    badge: 'high',
    label: 'High Risk',
  },
  {
    icon: '🌾',
    title: 'Food Security',
    desc: 'Crop yields for staples like wheat and maize are projected to decline in most regions as temperatures exceed optimal ranges.',
    badge: 'medium',
    label: 'Emerging Risk',
  },
]

const SOLUTIONS = [
  { icon: '☀️', title: 'Solar & Wind Power', desc: 'Renewables now the cheapest electricity source in history.' },
  { icon: '⚡', title: 'Electric Vehicles', desc: 'EVs eliminating transport emissions, the second-largest sector.' },
  { icon: '🌳', title: 'Reforestation', desc: 'Restoring forests can sequester billions of tonnes of CO₂.' },
  { icon: '🏭', title: 'Carbon Capture', desc: 'Direct air capture removes CO₂ directly from the atmosphere.' },
  { icon: '🥦', title: 'Sustainable Agriculture', desc: 'Regenerative farming can store carbon in soils at scale.' },
  { icon: '🏙️', title: 'Green Cities', desc: 'Urban efficiency upgrades cut energy use and heat-island effects.' },
  { icon: '🔋', title: 'Energy Storage', desc: 'Battery tech enables 24/7 clean power from intermittent sources.' },
  { icon: '📋', title: 'Climate Policy', desc: 'Carbon pricing and international agreements accelerate transition.' },
]

const RESOURCES = [
  { org: 'IPCC', name: 'Sixth Assessment Report (AR6)', href: 'https://www.ipcc.ch/assessment-report/ar6/' },
  { org: 'NASA', name: 'Global Climate Change — Vital Signs', href: 'https://climate.nasa.gov/' },
  { org: 'NOAA', name: 'Climate.gov — Data & Reports', href: 'https://www.climate.gov/' },
  { org: 'IEA', name: 'World Energy Outlook 2024', href: 'https://www.iea.org/reports/world-energy-outlook-2024' },
  { org: 'Carbon Brief', name: 'Interactive: Historical Temperature', href: 'https://www.carbonbrief.org/' },
  { org: 'Our World in Data', name: 'CO₂ and Greenhouse Gas Emissions', href: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions' },
]

function TempBar({ anomaly, year }) {
  const maxAnomaly = 1.4
  const heightPct = (anomaly / maxAnomaly) * 100
  const color = anomaly >= 1.0
    ? '#f87171'
    : anomaly >= 0.7
    ? '#fb923c'
    : anomaly >= 0.5
    ? '#fbbf24'
    : '#38bdf8'

  return (
    <div className="bar-col" title={`${year}: +${anomaly}°C`}>
      <div
        className="bar"
        style={{ height: `${heightPct}%`, background: color, minHeight: 4 }}
      />
      <div className="bar-year">{year}</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand">
          🌍 <span>Climate<b style={{ color: 'var(--accent-teal)' }}>Watch</b></span>
        </div>
        <ul className="nav-links">
          <li><a href="#temperature">Temperature</a></li>
          <li><a href="#impacts">Impacts</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-eyebrow">Global Climate Resource</div>
        <h1>The Planet Is<br /><em>Warming Fast</em></h1>
        <p className="hero-sub">
          Data-driven insights on climate change — its causes, consequences, and the
          solutions that can still make a difference.
        </p>
        <div className="hero-cta">
          <a href="#temperature"><button className="btn btn-primary">Explore the Data</button></a>
          <a href="#solutions"><button className="btn btn-outline">See Solutions</button></a>
        </div>
      </header>

      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-value" style={{ color: 'var(--accent-red)' }}>+1.29°C</div>
          <div className="stat-label">Temperature Anomaly</div>
          <div className="stat-note">vs. pre-industrial avg · 2024</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: 'var(--accent-orange)' }}>424 ppm</div>
          <div className="stat-label">Atmospheric CO₂</div>
          <div className="stat-note">highest in 3 million years</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: 'var(--accent-yellow)' }}>21 cm</div>
          <div className="stat-label">Sea Level Rise</div>
          <div className="stat-note">since 1900 · accelerating</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: 'var(--accent-teal)' }}>13%</div>
          <div className="stat-label">Arctic Ice Loss</div>
          <div className="stat-note">per decade (since 1979)</div>
        </div>
      </div>

      <section id="temperature" className="section">
        <div className="section-header">
          <div className="section-tag">Temperature Record</div>
          <h2>Global Surface Temperature Anomaly</h2>
          <p>Annual deviation from the 1951–1980 baseline (°C). Source: NASA GISS.</p>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-title">Temperature anomaly relative to 1951–1980 baseline</div>
          <div className="bar-chart">
            {TEMP_DATA.map(d => (
              <TempBar key={d.year} year={d.year} anomaly={d.anomaly} />
            ))}
          </div>
          <div className="bar-legend">
            <span><span className="legend-dot" style={{ background: '#38bdf8' }} />+0.0 – 0.49°C</span>
            <span><span className="legend-dot" style={{ background: '#fbbf24' }} />+0.5 – 0.69°C</span>
            <span><span className="legend-dot" style={{ background: '#fb923c' }} />+0.7 – 0.99°C</span>
            <span><span className="legend-dot" style={{ background: '#f87171' }} />+1.0°C and above</span>
          </div>
        </div>
      </section>

      <div className="divider-section">
        <h2>The 1.5°C Threshold</h2>
        <p>
          Scientists warn that crossing 1.5°C above pre-industrial levels will
          trigger irreversible changes in climate systems. We are nearly there.
        </p>
        <div className="temp-display">+1.29°C</div>
        <div className="temp-label">Current global average anomaly (2024)</div>
      </div>

      <section id="impacts" className="section">
        <div className="section-header">
          <div className="section-tag">Key Impacts</div>
          <h2>How Climate Change Is Affecting Our World</h2>
          <p>From melting ice sheets to disrupted food systems, the effects are already visible across every continent.</p>
        </div>
        <div className="topics-grid">
          {TOPICS.map(t => (
            <div className="topic-card" key={t.title}>
              <div className="topic-icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <span className={`topic-badge badge-${t.badge}`}>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="solutions-section">
        <section id="solutions" className="section">
          <div className="section-header">
            <div className="section-tag">Climate Solutions</div>
            <h2>We Have the Tools. We Need the Will.</h2>
            <p>Every sector of the economy can be decarbonised with technologies that exist today.</p>
          </div>
          <div className="solutions-grid">
            {SOLUTIONS.map(s => (
              <div className="solution-item" key={s.title}>
                <div className="solution-icon">{s.icon}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="resources" className="section">
        <div className="section-header">
          <div className="section-tag">Further Reading</div>
          <h2>Authoritative Sources</h2>
          <p>Data and analysis from the world's leading climate science organisations.</p>
        </div>
        <div className="resources-list">
          {RESOURCES.map(r => (
            <a className="resource-card" key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <div>
                <div className="resource-org">{r.org}</div>
                <div className="resource-name">{r.name}</div>
              </div>
              <span className="resource-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          ClimateWatch — an educational resource. Data sourced from{' '}
          <a href="https://climate.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA</a>,{' '}
          <a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">IPCC</a>, and{' '}
          <a href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA</a>.
        </p>
      </footer>
    </div>
  )
}
