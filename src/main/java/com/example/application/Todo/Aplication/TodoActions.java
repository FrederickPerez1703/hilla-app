package com.example.application.Todo.Aplication;

import com.example.application.Todo.Domain.Entity.Todo;

import java.util.List;

public interface TodoActions {
  List<Todo> getAll();
  Todo save(Todo todo);
  Todo update(Todo todo);
  void delete(Long id);
}
