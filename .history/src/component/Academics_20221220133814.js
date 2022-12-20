import React from 'react'
import { Link } from 'react-router-dom'

const Academics = () => {
  return (
    <div>
        <div class="d-flex">
  <div class="p-2 bg-dark h-100 w-25 d-inline-block">
  <div class="list-group">
  < Link to="#" class="list-group-item list-group-item-action my-3 py-2 rounded active" aria-current="true">
    News
  </a>
  < Link to="#" class="list-group-item list-group-item-action rounded my-3 py-2">Notes</a>
  < Link to="#" class="list-group-item list-group-item-action rounded my-3 py-2">Live Lecture</a>
  < Link to="#" class="list-group-item list-group-item-action rounded my-3 py-2">Updates</a>
  <a class="list-group-item list-group-item-action rounded my-3 py-2">Time Table</a>
</div>
  </div>
  <div class="p-2 flex-grow-1">Flex item</div>
</div>
    </div>
  )
}

export default Academics