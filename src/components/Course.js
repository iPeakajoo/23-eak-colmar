const Course = ({course}) => {
  return (
    <>
    
      {course.map((item, index) => (
        <div key={index} className="course-item">
          <div className="course-title "><h2 >{item.title}</h2></div>
        </div>
      ))}
    </>
  )
}
export default Course