import Chlg from "./Chlg";

export default function Header(){

    return(
        <>
       
        <div className="ui inverted segment">
  <div className="ui inverted secondary menu">
    <a className="active item">
      Home
    </a>
    <a className="item">
      My Challenges
    </a>
    <a className="item">
      Help
    </a>
  </div>
</div>

<select class="ui dropdown">
  <option value="">Sort By</option>
  <option value="1">Vote</option>
  <option value="0">Creation</option>
</select>


<Chlg></Chlg>
        </>
    );
}