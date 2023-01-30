package com.example.application.Todo.Aplication;

import com.example.application.Todo.Domain.Entity.Todo;
import com.example.application.Todo.Domain.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService implements TodoActions {

  private final TodoRepository todoRepository;

  @Autowired
  public TodoService(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  @Override
  public List<Todo> getAll() {
    return todoRepository.findAll();
  }

  @Override
  public Todo save(Todo todo) {
   return todoRepository.save(todo);
  }

  @Override
  public Todo update(Todo todo) {
    return todoRepository.save(todo);
  }

  @Override
  public void delete(Long id) {
    todoRepository.deleteById(id);
  }
}
