import { FaLink, FaLock, FaUserFriends } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import { people, relationships, relationshipStyles } from './data'

function NetworkIcon() {
  return <svg className="network-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 32 12 42m20-10L14 16m18 16 18-20M32 32l21 11M32 32v23"/><circle className="center" cx="32" cy="32" r="8"/><circle cx="12" cy="42" r="5"/><circle cx="14" cy="16" r="5"/><circle cx="50" cy="12" r="5"/><circle cx="53" cy="43" r="5"/><circle cx="32" cy="55" r="5"/></svg>
}

const statIcons = { family: FaUserFriends, friend: FaUserFriends, community: MdGroups, total: FaLink }
const stats = [['family','18','Family Members'],['friend','23','Friends'],['community','5','Communities'],['total','86','Total Connections']]

function FamilyIcon() {
  return <svg className="family-people-icon" viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="10" cy="9" r="4.5"/><circle cx="22" cy="8" r="5.5"/>
    <path d="M2.5 28c.4-8.2 3.5-12.3 9.3-12.3 2 0 3.6.5 4.8 1.4-2.2 2.5-3.3 6.1-3.5 10.9H2.5zm12.8 0c.3-9.1 2.6-13.6 7.2-13.6 4.5 0 7 4.5 7.3 13.6H15.3z"/>
  </svg>
}

function Highlights() {
  return <aside className="highlights"><h2>CONNECTION HIGHLIGHTS</h2>{stats.map(([type,value,label]) => { const Icon = statIcons[type]; return <div className="stat" key={type}><span className={`stat-icon ${type}`}>{type === 'family' ? <FamilyIcon/> : <Icon/>}</span><div><strong>{value}</strong><span>{label}</span></div></div> })}</aside>
}

function SocialGraph() {
  const map = Object.fromEntries(people.map(person => [person.id, person]))
  return <section className="social-graph" aria-label="Family and friend relationship network">
    <span className="group-title family-title">FAMILY</span><span className="group-title friends-title">FRIENDS</span>
    <svg className="relationship-lines" viewBox="0 0 760 900" aria-hidden="true">{relationships.map((edge, index) => { const from = map[edge.from], to = map[edge.to], style = relationshipStyles[edge.type]; return <line key={index} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={style.color} strokeWidth="2" strokeDasharray={style.dashed ? '7 7' : undefined}/> })}</svg>
    {people.map(person => <div className={`person ${person.id === 'you' ? 'you' : ''}`} key={person.id} style={{left:person.x,top:person.y,'--ring':relationshipStyles[person.type].color}}>
      <img src={person.avatar} alt=""/><span>{person.name}</span>
    </div>)}
  </section>
}

function Legend() {
  const rows = [['family','Family'],['community','Community'],['spouse','Spouse / Partner'],['extended','Extended Family'],['friend','Friend']]
  return <section className="legend"><h2>RELATIONSHIP TYPES</h2><div>{rows.map(([type,label]) => <p key={type}><i style={{'--line':relationshipStyles[type].color}} className={relationshipStyles[type].dashed ? 'dashed' : ''}/><span>{label}</span></p>)}</div></section>
}

export default function App() {
  return <main>
    <header><h1>Family Social Graph</h1><p>Family, Friends, Organizations &amp; Connections</p></header>
    <section className="intro"><NetworkIcon/><div>People are nodes.<br/>Relationships are edges.<br/>Memories connect us.</div></section>
    <Highlights/><SocialGraph/>
    <section className="privacy"><FaLock/><div><strong>Private by Design</strong><p>You control your connections<br/>and what you share.<br/>Your network. Your rules.</p></div></section>
    <Legend/>
  </main>
}
