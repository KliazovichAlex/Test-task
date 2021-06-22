const ContentList = ({ content }) => {
  return (
    <ul >
      {content.map((e,i)=> {return (<img src={e.image} alt="img" key={i}/>)})}
      {/* {console.info(`Available content: ${content}`)} */}
    </ul>
  );
};

export default ContentList;
