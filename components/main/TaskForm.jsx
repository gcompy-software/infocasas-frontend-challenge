import React from 'react'

const TaskForm = () => (
    
        <aside className="" id="formElement">
            <div className="aside-container">
                <h2>Nueva Tarea</h2>
                <div className="form-container">
                    <form id="formTask">
                        <div className="input-container">
                            <label for="titleTask">Título</label>
                            <input name="titleTask" id="titleTask" type="text" placeholder="Escriba un título descriptivo" required></input>
                        </div>
                        <div className="input-container">
                            <label for="personTask">Responsable</label>
                            <select name="personTask" id="personTask" required>
                            <option value="">-Seleccionar-</option>
                            <option value="Admin">Admin</option>
                            <option value="Guido Miranda">Guido Miranda</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label for="deadlineTask">Plazo de entrega</label>
                            <select name="deadlineTask" id="deadlineTask" required>
                            <option value="">-Seleccionar-</option>
                            <option value="1">1 día</option>
                            <option value="2">1 semana</option>
                            <option value="7">1 mes</option>
                            </select>
                        </div>
                        <div className="action-container">
                            <button type="submit">Guardar</button>
                            <button type="reset" id="cancelForm">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </aside>
)

export default TaskForm