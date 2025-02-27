const Course = ({course}) => {
  return (
    <div className="course-container">
      {course.map((item, index) => (
        <div key={index} className="course-item ">
          <div className="course-title"><h2 >{item.title}</h2></div>
        </div>
      ))}
    </div>
  )
}
export default Course