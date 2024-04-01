const ProjectListItem = ({ title, description }) => {
    return (
      <>
        <span className="text-4xl mb-4 font-light">{title}</span>
        <div className="p-[1px] bg-gray-400"></div>
      </>
    );
}
 
export default ProjectListItem;