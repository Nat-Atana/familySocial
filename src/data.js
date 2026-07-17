export const relationshipStyles = {
  self: { color: '#1169d9' },
  family: { color: '#7433cf' },
  extended: { color: '#7433cf', dashed: true },
  friend: { color: '#0969df' },
  spouse: { color: '#ef4a43' },
  child: { color: '#f39400' },
  community: { color: '#159daf', dashed: true },
}

export const people = [
  { id: 'grandfather', name: 'Grandfather', x: 402, y: 105, type: 'family', avatar: 'https://i.pravatar.cc/160?img=12' },
  { id: 'grandmother', name: 'Grandmother', x: 600, y: 105, type: 'family', avatar: 'https://i.pravatar.cc/160?img=47' },
  { id: 'father', name: 'Father', x: 360, y: 270, type: 'family', avatar: 'https://i.pravatar.cc/160?img=11' },
  { id: 'mother', name: 'Mother', x: 605, y: 270, type: 'family', avatar: 'https://i.pravatar.cc/160?img=44' },
  { id: 'uncle', name: 'Uncle', x: 132, y: 335, type: 'family', avatar: 'https://i.pravatar.cc/160?img=15' },
  { id: 'aunt', name: 'Aunt', x: 252, y: 455, type: 'extended', avatar: 'https://i.pravatar.cc/160?img=32' },
  { id: 'you', name: 'You', x: 482, y: 485, type: 'self', avatar: 'https://i.pravatar.cc/200?img=13' },
  { id: 'sister', name: 'Sister', x: 675, y: 430, type: 'family', avatar: 'https://i.pravatar.cc/160?img=49' },
  { id: 'bestFriend', name: 'Best Friend', x: 180, y: 600, type: 'friend', avatar: 'https://i.pravatar.cc/160?img=56' },
  { id: 'collegeFriend', name: 'College Friend', x: 292, y: 735, type: 'friend', avatar: 'https://i.pravatar.cc/160?img=3' },
  { id: 'spouse', name: 'Spouse', x: 625, y: 650, type: 'spouse', avatar: 'https://i.pravatar.cc/160?img=45' },
  { id: 'daughter', name: 'Daughter', x: 520, y: 835, type: 'child', avatar: 'https://i.pravatar.cc/160?img=5' },
  { id: 'son', name: 'Son', x: 690, y: 835, type: 'child', avatar: 'https://i.pravatar.cc/160?img=6' },
]

export const junctions = [
  { id: 'gpTop', x: 501, y: 105 },
  { id: 'gpBranch', x: 501, y: 185 },
  { id: 'parentMid', x: 482.5, y: 270 },
  { id: 'childBranch', x: 625, y: 770 },
]

export const connections = [
  { id: 'grandparents', source: 'grandfather', target: 'grandmother', type: 'family', centered: true },
  { id: 'gp-stem', source: 'gpTop', target: 'gpBranch', type: 'family' },
  { id: 'gp-father', source: 'gpBranch', target: 'father', type: 'family' },
  { id: 'gp-mother', source: 'gpBranch', target: 'mother', type: 'family' },
  { id: 'parents', source: 'father', target: 'mother', type: 'family', centered: true },
  { id: 'parent-you', source: 'parentMid', target: 'you', type: 'family' },
  { id: 'father-you', source: 'father', target: 'you', type: 'family', sourceHandle: 'diagonal-right' },
  { id: 'mother-you', source: 'mother', target: 'you', type: 'family', sourceHandle: 'diagonal-left' },
  { id: 'uncle-father', source: 'uncle', target: 'father', type: 'family', centered: true },
  { id: 'uncle-aunt', source: 'uncle', target: 'aunt', type: 'extended', centered: true },
  { id: 'aunt-you', source: 'aunt', target: 'you', type: 'family', centered: true },
  { id: 'sister-you', source: 'sister', target: 'you', type: 'family', centered: true },
  { id: 'best-you', source: 'bestFriend', target: 'you', type: 'friend', centered: true },
  { id: 'college-you', source: 'collegeFriend', target: 'you', type: 'friend', centered: true },
  { id: 'you-spouse', source: 'you', target: 'spouse', type: 'spouse', centered: true },
  { id: 'spouse-stem', source: 'spouse', target: 'childBranch', type: 'child', centered: true },
  { id: 'child-daughter', source: 'childBranch', target: 'daughter', type: 'child' },
  { id: 'child-son', source: 'childBranch', target: 'son', type: 'child' },
]

export const connectionStats = [
  { type: 'family', value: 18, label: 'Family Members', color: '#7951da', background: '#f3effa' },
  { type: 'friend', value: 23, label: 'Friends', color: '#2875df', background: '#edf3fb' },
  { type: 'community', value: 5, label: 'Communities', color: '#299eac', background: '#edf5f5' },
  { type: 'total', value: 86, label: 'Total Connections', color: '#5c6572', background: '#f0f0f2' },
]

export const legendItems = [
  ['family', 'Family'],
  ['spouse', 'Spouse / Partner'],
  ['friend', 'Friend'],
  ['community', 'Community'],
  ['extended', 'Extended Family'],
]
