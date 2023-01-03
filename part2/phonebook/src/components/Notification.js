const Notification = ({ infoMessage, errorMessage }) => {
  if (infoMessage === null && errorMessage === null) {
    return null
  } else if(infoMessage != null){
    return (
        <div className='notification'>
          {infoMessage}
        </div>
    )
  }else{
    return (
        <div className='error'>
          {errorMessage}
        </div>
    )
  }



}

export default Notification
