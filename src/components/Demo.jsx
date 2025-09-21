import { useQuery } from "@tanstack/react-query"

const Demo = () => {

    const {data, isLoading } = useQuery({
        queryFn: () => fetchTodo()
    })
    
  return (
    <div>Demo</div>
  )
}

export default Demo