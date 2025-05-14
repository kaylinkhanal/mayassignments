const comments = [
  { id: 1, text: 'Great post!', parentId: null },
  { id: 2, text: 'Thanks!', parentId: 1 },
  { id: 3, text: 'Any more details?', parentId: null },
  { id: 4, text: 'I agree.', parentId: 1 },
  { id: 5, text: 'Working on it.', parentId: 3 },
  { id: 6, text: 'This is helpful.', parentId: 4 }
];

// Q6. Convert the flat list of comments into a nested structure where replies are nested under their parent comment.
// Expected Output:
// {
//   "1": {
//     id: 1,
//     text: 'Great post!',
//     parentId: null,
//     replies: {
//       "2": { id: 2, text: 'Thanks!', parentId: 1, replies: {} },
//       "4": {
//         id: 4,
//         text: 'I agree.',
//         parentId: 1,
//         replies: {
//           "6": { id: 6, text: 'This is helpful.', parentId: 4, replies: {} }
//         }
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     text: 'Any more details?',
//     parentId: null,
//     replies: {
//       "5": { id: 5, text: 'Working on it.', parentId: 3, replies: {} }
//     }
//   }
// }
// Note: The outer keys are the comment IDs for easier lookup.
// An alternative could be an array of root comments, each with a 'replies' array.


function nestComment(commentList){
    const commentMap = {}

    commentList.forEach((comment) => {

    commentMap[comment.id] = {...comment, replies:{}}
     })
    // console.log(commentMap);
        const nestedResult = {}

       commentList.forEach((comment) =>{
          
        const currentComment = commentMap[comment.id]
        // console.log('currentComment is', currentComment);

        if(currentComment.parentId === null){
            // this is parent comment
            nestedResult[comment.id] = currentComment;
            console.log("nestedResult", nestedResult);
            

        }else{
            // this is child comment
            // finding parent comment
            const parentComment = commentMap[comment.parentId]   // search in object, returns the parentComment object of corresponding Id
            console.log('parent comment is', parentComment);

            if(parentComment){
                parentComment.replies[comment.id] = currentComment;
            }
            else {
                 console.log(`Orphaned comment found: id ${comment.id}, parentId ${comment.parentId}`); 
                }
    
            

        }

       });
      return nestedResult;

} 

const nestedComments = nestComment(comments);
console.log("nested result is ", JSON.stringify(nestedComments,null, 2));

