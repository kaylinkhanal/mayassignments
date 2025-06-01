import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    backgroundColor: 'red',
    borderRadius : 50,
    width: 100,
    height: 100,
    marginLeft:0,
    borderRadius:0,
    marginTop : 0,
    radius : 0,
   
    borderTop: '',
  borderRight: '',
  borderBottom: '',
  borderLeft: '',
  isTriangle: false,
  },
  reducers: {
    incrementHeight: state => {

      state.height = state.height + 10
    },
    decrementHeight: state => {

      state.height = state.height - 10
    },
    incrementWidth: state => {

      state.width = state.width + 10
    },
    decrementWidth: state => {

      state.width = state.width - 10
    },
    incrementmarginLeft: state => {

      state.marginLeft = state.marginLeft + 10
    },
    incrementmarginRight: state => {

      state.marginLeft = state.marginLeft - 10
    },
    incrementmarginTop: state => {

      state.marginTop = state.marginTop + 10
    },
    incrementmarginBottom: state => {

      state.marginTop = state.marginTop - 10
    },
    changeColor: (state, action) => {
     state.backgroundColor= action.payload
    },
    changeToCircle: (state) => {
     state.borderRadius = 200
    }

    

    

  }
})

// Action creators are generated for each case reducer function
export const { incrementHeight, incrementWidth, decrementWidth,decrementHeight, changeColor , incrementmarginLeft , changeToCircle,incrementmarginTop,incrementmarginBottom,incrementmarginRight } = boxSlice.actions

export default boxSlice.reducer