'use client'

import { Button } from '@components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoading } from '@hooks/useLoading'
import { searchMovie, searchMovieProps } from '@schemas/search/querySchema'
import { searchContentByTitle } from '@services/cenaestelarApi'
import { useMoviesStore } from '@store/movies'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export function SearchForm() {
  const { isLoading, setIsLoading } = useLoading()

  const form = useForm<searchMovieProps>({
    resolver: zodResolver(searchMovie),
  })

  const onSubmit = async ({ query }: searchMovieProps) => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await searchContentByTitle(query)
      useMoviesStore.setState({ movies: response })
      setIsLoading((prevState) => !prevState)
    } catch (error) {
      setIsLoading((prevState) => !prevState)
      toast.error('Não foi possível encontrar o filme')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="container flex flex-col py-4 gap-4">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Procure um filme</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o nome do filme que deseja achar"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            style={{ margin: '1rem 0' }}
            disabled={!!isLoading}
          >
            {isLoading ? 'Procurando...' : 'Procurar filme'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
