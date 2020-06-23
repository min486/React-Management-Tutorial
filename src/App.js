import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '성민',
  'birthday': '940427',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '동규',
  'birthday': '99',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '기현',
  'birthday': '96',
  'gender': '남자',
  'job': '배우'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          )
        })
      }
      </div>
     
  );
}

export default App;
