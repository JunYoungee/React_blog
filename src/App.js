import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let title = "ReactBlog";
  let[subtitle, setSubtitle] = useState(['남자 코트 추천', '강남우동 맛집', '파이썬 독학']);
  let[like, setLike] = useState([0,0,0]);
  let[modal, setModal] = useState(false);
  let[mtitle, setMtitle] = useState(0);
  let[입력값, 입력값변경] = useState('');
  let[check, setCheck] = useState(false);
  

  [1,2,3].map(function(a){
    return 'afgsgd'
  })

  return (
    <div className="App">
      <div class="black-nav">
        <h4>{ title }</h4>
      </div>
      {/* <div className="list">
        <h4 onClick={()=> {
          modal == true ? setModal(false) : setModal(true)
        }}>{ subtitle[0] } <span onClick={()=> { subLike(like+1) }}> 👍 </span> { like } </h4>
        <p>2월 14일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=> {
          modal == true ? setModal(false) : setModal(true)
        }}>{ subtitle[1] }</h4>
        <p>2월 14일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=> {
          modal == true ? setModal(false) : setModal(true)
        }}>{ subtitle[2] }</h4>
        <p>2월 14일 발행</p>
      </div>
      <button onClick={()=> {
        let copy2 = [...subtitle];
        copy2.sort()
        setSubtitle(copy2);
      }}>가나다순 정렬</button>
      <button onClick={()=>{
        let copy = [...subtitle];
        copy[0] = '여자 코트 추천';
        setSubtitle(copy);
      }}> 글 수정 </button> */}

      {
        subtitle.map(function(a, i){
          return(
            <div className='list'>
              <h4 onClick={()=>{
                modal == false ? setModal(true) : setModal(false);
                setMtitle(i);
              }}>{ subtitle[i] } <span onClick={(e)=> {
                e.stopPropagation();
                const copy_like = [...like];
                copy_like[i] = copy_like[i] + 1 
                setLike(copy_like)
              }}> 👍 </span> { like[i] }</h4>
              <p>2월 14일 발행</p>
              <button onClick={()=>{
                const copy_subtitle  = [...subtitle]
                copy_subtitle.splice(i,1)
                setSubtitle(copy_subtitle)
              }}>삭제</button>
            </div>
          )
        })
      }
      <label>
        <input onChange={(e)=>{
          e.target.value == "" ? setCheck(false) : setCheck(true);
          입력값변경(e.target.value);
        }}></input>
        <button onClick={()=>{
          const copy_subtitle2 = [...subtitle]
          copy_subtitle2.unshift(입력값)
          true == check ? setSubtitle(copy_subtitle2) : alert('글을 작성해주세요');
          const copy_like2 = [...like];
          copy_like2.unshift(0)
          setLike(copy_like2)
        }}>추가</button>
      </label>
      
      {
        modal == true ? <Modal subtitle = { subtitle } setSubtitle = {setSubtitle} mtitle = { mtitle }/> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
  <div className="modal">
    <h4>{ props.subtitle[props.mtitle] }</h4>
    <p>날짜</p>
    <p>상세 내용</p>
    <button onClick={()=> {
      const ccc = [...props.subtitle]
      ccc[0] = '여자 코트 추천'
      props.setSubtitle(ccc)
    }}>글 수정</button>
  </div>
  )
}

export default App;
