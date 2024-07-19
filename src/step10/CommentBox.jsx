import './App'

const styles = {
  wrapper : {
    margin : 8,
    padding : 8,
    display : 'flex',
    flexDirection : 'row',
    border  :'1px solid gray',
    borderRadius : 16
  },
  imageContainer : {
    height : 50
  },
  image : {
    width : 50,
    height : 50,
    borderRadius :25
  },
  contentContainer : {
    marginLeft : 8,
    disply : 'flex',
    flexDirection : 'column',
    justifyContent : 'center'
  },
  nameText : {
    color : 'black',
    fontSize : 16,
    fontWeight : 'bold'
  },
  commentText : {
    color : 'gray',
    fontSize : 16,
  }
}

export function CommentBox(comm){
  return (
    <div style = {styles.wrapper}>
        <div style = {styles.imageContainer}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style = {styles.image}
                alt="Profile Image"
            />
            </div>
        <div style = {styles.contentContainer}>
            <span style = {styles.nameText}>{comm.name}</span>
            <span style = {styles.commentText}>{comm.comment}</span>
        </div>
      </div>
  )
}