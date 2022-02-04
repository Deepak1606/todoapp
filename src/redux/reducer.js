export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const COMPLETE_ITEM = 'COMPLETE_ITEM'
export const CLEAR_ITEM = 'CLEAR_ITEM'

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id
})

export const completeItem = id => ({
  type: COMPLETE_ITEM,
  payload: id
})

export function clearItem(){
  return{
    type: CLEAR_ITEM
  }
}

const initialState = {
  itemList: [],
  completeList:[]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: state.itemList.concat({
          id: Math.random(),
          name: action.payload
        })
      }
    case REMOVE_ITEM:
      return {
        ...state,
        itemList: state.itemList.filter(item => item.id !== action.payload)
      }
    case COMPLETE_ITEM:
      function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (strTime + " on "+date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
      }
      var obj = state.itemList.filter(item => item.id==action.payload)
      obj[0].date = formatDate(new Date(Date.now()));
      console.log(obj)
      return{
        ...state,
        completeList: state.completeList.concat(obj),
        itemList: state.itemList.filter(item => item.id !== action.payload)
      }
      case CLEAR_ITEM:
      return{
        ...state,
        completeList: []
      }

    default:
      return state
  }
}

export default rootReducer