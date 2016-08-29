import React from 'react'
import ReactDOM, {render} from 'react-dom'
import CommentBox from './components/commentBox'

var a={
  x:1,
  y:2,
  c:3,
  d:4
}
var {x,y,...z} = a

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
