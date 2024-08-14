import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectAPI"
import AddTaskModal from "@/components/tasks/AddTaskModal"
import TaskList from "@/components/tasks/TaskList"

export default function ProjectDetailsView() {

  const navigate = useNavigate()
  const params = useParams()
  const projectId = params.projectId!

  const { data, isLoading, isError } = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })

  if(isLoading) return 'cargando...'
  if(isError) return <Navigate to='/404' />
  console.log(data)
  if(data) return (
    <>
      <h1 className="text-5xl font-black">{data.projectName}</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">{data.description}</p>
      <nav className="my-5 flex gap-3">
          <button
              type="button"
              className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
              onClick={() => navigate(location.pathname+'?newTask=true')}
          >Agregar Tarea</button>
      </nav>

      <div className="">
  
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
        <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CTO</p>
              </div>
            </div>
          </li>
        <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Dries Vincent</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Business Relations</p>
              </div>
            </div>
          </li>
        <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Lindsay Walton</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Front-end Developer</p>
              </div>
            </div>
          </li>
        <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Courtney Henry</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Designer</p>
              </div>
            </div>
          </li>
        <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Tom Cook</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Director of Product</p>
              </div>
            </div>
          </li>
        
      </ul>
    </div>
  </div>

</div>
      <TaskList tasks={data.tasks} />
      <AddTaskModal />
    </>
  )
}
