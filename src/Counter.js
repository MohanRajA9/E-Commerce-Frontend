import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  useEffect(()=>{
    console.log("like is updated", like)
  },[])

  return (
    <div>
      <IconButton aria-label="delete" color="primary" onClick={() => {
        setLike(like + 1)
      }} >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      {/* <button onClick={() => {
        setLike(like + 1);
      }}
      >👍 {like} </button> */}

      <IconButton aria-label="delete" color="error" onClick={() => {
        setDisLike(disLike + 1)
      }} >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button onClick={() => {
        setDisLike(disLike + 1);
      }}
      >👎 {disLike} </button> */}

    </div>
  );
}
