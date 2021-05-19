import "./Design.css";

const Design = (props) => {

    const colors = ["one", "two", "three"];

    const data = (reps, colorArr) => {
        const reqData = [];
        for (var i = 0; i < reps; i++) {
           const index = (Math.floor(Math.random()* 3)  );
           const showNum = (Math.floor(Math.random()* 2) );

           reqData.push({
               className: colorArr[index],
               content: showNum
           })
        }
        return reqData;
    }

   const dat = data(props.num, colors);

    return (
        <div className="design">
            {dat.map(element => {
               return <div className={element.className}>{element.content}</div>
            })}
        </div>
    )
}

export default Design;