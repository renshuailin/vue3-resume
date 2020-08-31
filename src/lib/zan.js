import {
  ref
} from 'vue';
const praise = ref(666);
const changePraise = (num = 1) => praise.value += num;

export {
  praise,
  changePraise
}