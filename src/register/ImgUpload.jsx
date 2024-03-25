import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'

const ImgUpload = ({ label, onUpload, styleProp }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const blockStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left', // Align content to the left
    alignItems: 'flex-start', // Align items to the start (left)
    ...styleProp
  }

  const labelStyle = {
    fontSize: 'medium',
    paddingTop: '0.25rem',
    textAlign: 'left'
  }

  const iconStyle = {
    backgroundColor: 'var(--peach)',
    color: 'var(--purple)', 
    cursor: 'pointer',
    border: '1px solid var(--purple)',
    padding: '0.25rem',
    width: '5rem',
    height: '5rem'
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onUpload(file);
  };

  return (
    <div style={blockStyle}>
      <div style={labelStyle}>{label}</div>
      <label htmlFor="file-input">
        <FaUpload
          style={iconStyle}
        />
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  )
}

export default ImgUpload;
