import React, { useState } from 'react'

export default function Index() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mainTask, setMainTask] = useState([]);
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    const changeDesc = (e) => {
        setDescription(e.target.value);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        setMainTask([...mainTask, { title, description }]);

        setTitle("");
        setDescription("");
        console.log(mainTask);
    };

    const deleteHandler = (i) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
    };
    let renderTask = <h2>No Task Available</h2>;
    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => {
            return (
                <li key={i} className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-between w-2/3">
                        <h5 className="text-2xl font-semibold">{t.title}</h5>
                        <h6 className="text-lg font-medium">{t.description}</h6>
                    </div>
                    <button
                        onClick={() => { deleteHandler(i) }}
                        className="bg-red-400 text-white px-4 py-2 rounded font-bold"
                    >
                        Delete
                    </button>
                </li>
            );
        });
    }

    return (
        <>
            <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
                My Todolist
            </h1>
            <form onSubmit={submitHandle}>
                <input
                    type="text"
                    className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
                    placeholder="Enter Title Here"
                    value={title}
                    onChange={changeTitle}
                />
                <input
                    type="text"
                    className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
                    placeholder="Enter Discription Here"
                    value={description}
                    onChange={changeDesc}
                />
                <button className="bg-black text-white px-4 py-3 text-2xl text-bold rounded m-5">
                    Add Task
                </button>
            </form>
            <hr className="bg-black h-1 " />
            <div className="p-8 bg-slate-300 mt-8">
                <ul>{renderTask}</ul>
            </div>
        </>
    )
}
