import Router from 'express';
const router = Router();
import {getTodoById, getTodo,postTodo, deleteTodo,updateTodo, getSearchText} from '../controller/todoController.js'


router.get('/',getTodo);

router.get('/:id',getTodoById);

router.get('/?title=searchText', getSearchText);

router.post('/',postTodo);

router.delete('/:id',deleteTodo);

router.put('/:id',updateTodo);

export default router;