import UV_PIE from './uv-pie-constants';

const selectSlice = (index) => {
  return {
    type: UV_PIE.SELECT_SLICE,
    sliceIndex: index
  }
};

export {
  selectSlice
}
