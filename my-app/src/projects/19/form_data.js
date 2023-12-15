const category = [
  { id: 21, value: 'sports' },
  { id: 23, value: 'history' },
  { id: 24, value: 'politics' },
]
const difficulty = [
  { value: 'easy' },
  { value: 'medium' },
  { value: 'hard' },
]
export const formItem = [
  {
    content: 'Number Of Questions',
    Component: 'input',
    children: null,
    name: 'amount',
    props: { type: 'number', className: 'form-input', min: 1, max: 50, defaultValue: 10 }
  },
  { 
    content: 'Category', 
    Component: 'select', 
    children: category, 
    name: 'category', 
    props: { className: 'form-input' } 
  },
  { 
    content: 'Select Difficulty', 
    Component: 'select', 
    children: difficulty, 
    name: 'difficulty', 
    props: { className: 'form-input' } 
  },
]