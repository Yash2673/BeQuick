const initState = {
    news : [{title:'Good Morning Maam',content : 'How did you spend your vacations?',id:'1'},
            {title:'Good Morning Maam',content : 'How did you spend your vacations?',id:'2'},
            {title:'Good Morning Maam',content : 'How did you spend your vacations?',id:'3'}]
}

export const newsReducer =(state=initState,action) => {
    if(action.type==='News_Created')
    {
        console.log('News Created Successfully');
    }
    else if(action.type==='News_Create_Error')
    {
        console.log('News Creation Error');
    }
    else if(action.type==='Challenge_Created')
    {
        console.log('Challenge Created');
    }
    else if(action.type==='Challenge_Error')
    {
        console.log('Challenge Error',action.err);
    }
    else if(action.type==='View_Increased')
    {
        console.log('Views Increased Successfully');
    }
    else if(action.type==='View_Error')
    {
        console.log('Views Error',action.err.message);
    }
    else if(action.type==='Supporters_Increased')
    {
        console.log('Supporters Increased Successfully');
    }
    else if(action.type==='Supporters_Error')
    {
        console.log('Supporters Error',action.err.message);
    }
    else if(action.type==='Article_Added')
    {
        console.log('Article Added');
    }
    else if(action.type==='Article_Error')
    {
        console.log('Article Error',action.err.message);
    }
    else if(action.type==='Chal_Added')
    {
        console.log('Challenge Added');
    }
    else if(action.type==='Chal_Error')
    {
        console.log('Challenge Error',action.err.message);
    }
    return state;
}