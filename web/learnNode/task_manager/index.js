const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const get_all_tasks = () => {
    return JSON.parse(fs.readFileSync("./tasks.json", { encoding: 'utf-8' }))
}

const show_all_tasks = () => {
    console.log("\n");
    for (let task of get_all_tasks()) {
        console.log(
            `Title : ${task.title}\nTask : ${task.task}\n`
        )
    }
}

const get_task = (title) => {
    const task = isTaskExists(title)
    if (task) {
        console.log(`\nTitle : ${task.title}\nTask : ${task.task}\n`)
        return
    }
    console.log("Task Not found!!!")
}

const add = (title, task) => {
    const tasks = get_all_tasks()
    if (isTaskExists(title)) {
        console.log(`Task already exists with title "${title}"`)
        return
    }
    tasks.push({
        title, task
    })
    update_all_tasks(tasks)
}

const remove_task = (title) => {
    const tasks = get_all_tasks()
    const task = isTaskExists(title)
    if (task) {
        const index = tasks.findIndex((element) => element.title == task.title)
        if (index > -1) { // only splice array when item is found
            tasks.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log(`Deleted Task -> "${task.task}" with title -> "${task.title}"`)
        update_all_tasks(tasks)
    }
    else {
        console.log(`Task with title "${title}" don't exists`)
    }
}

function update_all_tasks(tasks) {
    fs.writeFileSync("./tasks.json", JSON.stringify(tasks))
}

function isTaskExists(title) {
    const tasks = get_all_tasks()
    return tasks.find((element) => {
        return element.title == title
    })

}

if (argv.add && argv.title) {
    add(argv.title, argv.add)
}
else if (argv.show) {
    show_all_tasks()
}
else if (argv.get) {
    get_task(argv.get) // gets the title
}
else if (argv.del) {
    remove_task(argv.del)
}