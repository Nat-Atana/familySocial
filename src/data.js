export const relationshipStyles = {
  self: { color: '#1169d9' }, family: { color: '#7433cf' }, extended: { color: '#7433cf', dashed: true },
  friend: { color: '#0969df' }, spouse: { color: '#ef4a43' }, child: { color: '#f39400' }, community: { color: '#159daf', dashed: true },
}

export const people = [
  { id:'grandfather',name:'Grandfather',x:402,y:105,type:'family',avatar:'https://i.pravatar.cc/160?img=12' },
  { id:'grandmother',name:'Grandmother',x:600,y:105,type:'family',avatar:'https://i.pravatar.cc/160?img=47' },
  { id:'father',name:'Father',x:360,y:270,type:'family',avatar:'https://i.pravatar.cc/160?img=11' },
  { id:'mother',name:'Mother',x:605,y:270,type:'family',avatar:'https://i.pravatar.cc/160?img=44' },
  { id:'uncle',name:'Uncle',x:132,y:335,type:'family',avatar:'https://i.pravatar.cc/160?img=15' },
  { id:'aunt',name:'Aunt',x:252,y:455,type:'extended',avatar:'https://i.pravatar.cc/160?img=32' },
  { id:'you',name:'You',x:482,y:485,type:'self',avatar:'https://i.pravatar.cc/200?img=13' },
  { id:'sister',name:'Sister',x:675,y:430,type:'family',avatar:'https://i.pravatar.cc/160?img=49' },
  { id:'bestFriend',name:'Best Friend',x:180,y:600,type:'friend',avatar:'https://i.pravatar.cc/160?img=56' },
  { id:'collegeFriend',name:'College Friend',x:292,y:735,type:'friend',avatar:'https://i.pravatar.cc/160?img=3' },
  { id:'spouse',name:'Spouse',x:625,y:650,type:'spouse',avatar:'https://i.pravatar.cc/160?img=45' },
  { id:'daughter',name:'Daughter',x:520,y:835,type:'child',avatar:'https://i.pravatar.cc/160?img=5' },
  { id:'son',name:'Son',x:690,y:835,type:'child',avatar:'https://i.pravatar.cc/160?img=6' },
]

export const relationships = [
  ['grandfather','grandmother','family'],['grandfather','father','family'],['grandmother','mother','family'],
  ['father','mother','family'],['father','you','family'],['mother','you','family'],['uncle','father','family'],
  ['uncle','aunt','extended'],['aunt','you','family'],['sister','you','family'],['bestFriend','you','friend'],
  ['collegeFriend','you','friend'],['you','spouse','spouse'],['spouse','daughter','child'],['spouse','son','child'],
].map(([from,to,type]) => ({from,to,type}))
