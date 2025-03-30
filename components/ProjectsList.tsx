import { useEffect } from "react"
import { useApi } from "@/hooks/useApi"
import { useDatabaseError } from "@/context/DatabaseErrorContext"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ProjectsList({ walletAddress }) {
  const { isDbError, setDbError } = useDatabaseError()
  const {
    data,
    error,
    isLoading,
    isDbError: localDbError,
    fetchData,
    retry
  } = useApi({
    onError: err => {
      if (err.isDbError) {
        setDbError(true)
      }
    }
  })

  useEffect(() => {
    if (walletAddress) {
      fetchData(`/projects?walletAddress=${walletAddress}`)
    }
  }, [walletAddress, fetchData])

  // Handle database error already shown by the context provider
  if (isDbError || localDbError) {
    return (
      <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Projects cannot be loaded right now
        </p>
        <Button
          onClick={retry}
          variant="outline"
          className="mt-4 mx-auto block"
        >
          Try Again
        </Button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error && !isDbError) {
    return (
      <div className="p-4 border rounded-md bg-red-50 dark:bg-red-900/20">
        <p className="text-center text-red-600 dark:text-red-400">
          {error.message}
        </p>
        <Button
          onClick={retry}
          variant="outline"
          className="mt-4 mx-auto block"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      {data?.projects.map(project => (
        <div key={project.id} className="border p-4 rounded-md mb-4">
          <h3 className="font-medium">{project.name}</h3>
          {/* other project details */}
        </div>
      ))}

      {data?.projects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No projects found
        </p>
      )}
    </div>
  )
}
