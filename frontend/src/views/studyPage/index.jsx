import stack_thumnail from '../../assets/stack_thumnail.png'
import queue_thumnail from '../../assets/queue_thumnail.png'
import graph_thumnail from '../../assets/graph_thumnail.jpg'
import tree_thumnail from '../../assets/tree_thumnail.PNG'
import list_thumnail from '../../assets/list_thumnail.PNG'
import '../../styles/main.css';


function StudyPage() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center" }}>
      <h1>자료구조</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4" style={{width: "60%"}}>
        <div class="col">
          <div class="card">
            <img src={stack_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">스택</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={queue_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">큐</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={graph_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">그래프</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={tree_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">트리</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={list_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">리스트</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StudyPage