import { FaLock } from 'react-icons/fa'
import { MdGroups, MdLink, MdPeople } from 'react-icons/md'
import { useState } from 'react'
import { people, relationships, relationshipStyles } from './data'

function NetworkIcon() {
  return <svg className="network-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 32 12 42m20-10L14 16m18 16 18-20M32 32l21 11M32 32v23"/><circle className="center" cx="32" cy="32" r="8"/><circle cx="12" cy="42" r="5"/><circle cx="14" cy="16" r="5"/><circle cx="50" cy="12" r="5"/><circle cx="53" cy="43" r="5"/><circle cx="32" cy="55" r="5"/></svg>
}

const statIcons = { family: MdPeople, friend: MdPeople, community: MdGroups, total: MdLink }
const stats = [['family','18','Family Members'],['friend','23','Friends'],['community','5','Communities'],['total','86','Total Connections']]

function Highlights() {
  return <aside className="highlights"><h2>CONNECTION HIGHLIGHTS</h2>{stats.map(([type,value,label]) => { const Icon = statIcons[type]; return <div className="stat" key={type}><span className={`stat-icon ${type}`}><Icon/></span><div><strong>{value}</strong><span>{label}</span></div></div> })}</aside>
}

function SocialGraph() {
  const [selectedId, setSelectedId] = useState(null)
  const map = Object.fromEntries(people.map(person => [person.id, person]))
  const routedEdges = new Set(['grandfather-father', 'grandmother-mother', 'father-you', 'mother-you', 'spouse-daughter', 'spouse-son'])
  return <section className="social-graph" aria-label="Family and friend relationship network">
    <span className="group-title family-title">FAMILY</span><span className="group-title friends-title">FRIENDS</span>
    <svg className="relationship-lines" viewBox="0 0 760 900" aria-hidden="true">
      <path d="M501 105V185L360 270M501 185L605 270" fill="none" stroke={relationshipStyles.family.color} strokeWidth="2"/>
      <path d="M482.5 270V485" fill="none" stroke={relationshipStyles.family.color} strokeWidth="2"/>
      <path d="M385.7 290.2L447.4 415.1" fill="none" stroke={relationshipStyles.family.color} strokeWidth="2"/>
      <path d="M579.4 290.3L516.9 415.3" fill="none" stroke={relationshipStyles.family.color} strokeWidth="2"/>
      <path d="M625 650V770L520 835M625 770L690 835" fill="none" stroke={relationshipStyles.child.color} strokeWidth="2"/>
      {relationships.map((edge, index) => { if (routedEdges.has(`${edge.from}-${edge.to}`)) return null; const from = map[edge.from], to = map[edge.to], style = relationshipStyles[edge.type]; return <line key={index} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={style.color} strokeWidth="2" strokeDasharray={style.dashed ? '7 7' : undefined}/> })}
    </svg>
    {people.map(person => <div className={`person ${person.id === 'you' ? 'you' : ''} ${selectedId === person.id ? 'selected' : ''}`} key={person.id} style={{left:person.x,top:person.y,'--ring':relationshipStyles[person.type].color}}
      role="button" tabIndex="0" aria-pressed={selectedId === person.id} aria-label={`Highlight ${person.name}`}
      onClick={() => setSelectedId(current => current === person.id ? null : person.id)}
      onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedId(current => current === person.id ? null : person.id) } }}>
      <img src={person.avatar} alt=""/><span>{person.name}</span>
    </div>)}
  </section>
}

function Legend() {
  const rows = [['family','Family'],['spouse','Spouse / Partner'],['friend','Friend'],['community','Community'],['extended','Extended Family']]
  return <section className="legend"><h2>RELATIONSHIP TYPES</h2><div>{rows.map(([type,label]) => <p key={type}><i style={{'--line':relationshipStyles[type].color}} className={relationshipStyles[type].dashed ? 'dashed' : ''}/><span>{label}</span></p>)}</div></section>
}

export default function App() {
  return <main>
    <header><h1>Family Social Graph</h1><p>Family, Friends, Organizations &amp; Connections</p></header>
    <section className="intro"><NetworkIcon/><div>People are nodes.<br/>Relationships are edges.<br/>Memories connect us.</div></section>
    <Highlights/><div className="graph-frame"><SocialGraph/></div>
    <section className="privacy"><FaLock/><div><strong>Private by Design</strong><p>You control your connections<br/>and what you share.<br/>Your network. Your rules.</p></div></section>
    <Legend/>
  </main>
}
