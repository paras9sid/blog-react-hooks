import { firestore } from "../firebase";
import { useFormInput } from "../hooks";

function CreatePost() {

  //using hooks
  // const [title,setTitle] = useState('');
  // const [subTitle,setSubTitle] = useState('');
  // const [content,setContent] = useState('');


  //using custom hooks imported
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');


  function handleSubmit(e){
    e.preventDefault(); // prevent page from reloading when form is submitted

    console.log('title',title);
    console.log('subTitle',subTitle);
    console.log('content',content);

    //adding to cloud firestore - firebae db

      //using hooks
      // firestore
      // .collection('posts')
      // .add({
      //   title,
      //   subTitle,
      //   content,
      //   createdAt: new Date(), // timestamp
      // });

      //using custom hooks
      firestore
      .collection('posts')
      .add({
        title: title.value,
        subTitle:subTitle.value,
        content:content.value,
        createdAt: new Date(), // timestamp
      });
    

  }

  return <div className="create-post">
    <h1>Create Post</h1>
    
    <form onSubmit={handleSubmit}>

      <div className="form-field">
        <label>Title</label>
        {/* <input value={title} onChange={(e)=> setTitle(e.target.value)}/> */}
        {/* //after using custom hooks & spread operator*/}
        <input {...title}/>

      </div>

      <div className="form-field">
        <label>Sub Title</label>
        <input {...subTitle}/>
      </div>

      <div className="form-field">
        <label>Content</label>
        <textarea {...content}></textarea>
      </div>

      <button className="create-post-btn">Create Post</button>
    </form>
  </div>;
}

export default CreatePost;
