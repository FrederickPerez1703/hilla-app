package com.example.application.Todo.Infrastructure.Controller;

import com.example.application.Todo.Aplication.TodoActions;
import com.example.application.Todo.Domain.Entity.Todo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoController {

  private final TodoActions iCustomerActions;

  @Autowired
  public TodoController(TodoActions iCustomerActions) {
    this.iCustomerActions = iCustomerActions;
  }

  public List<Todo> getAll(){
    return iCustomerActions.getAll();
  }

  public Todo save(String todo){
    return iCustomerActions.save(new Todo(todo));
  }

  public Todo update(Todo todo){
    return iCustomerActions.update(todo);
  }

  public void delete(Long id){
    iCustomerActions.delete(id);
  }
}
