import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'


export default function Features() {
    return (
        <section className=" py-2 md:py-4 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
               
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-4 grid max-w-sm gap-6 *:text-center md:mt-8">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                    color='orange'
                                />
                            </CardDecorator>

                            <h3 className="text-xl mt-2 font-medium">Whole-food-recipes</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Each dish uses everyday, unprocessed ingredients.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                    color='green'
                                />
                            </CardDecorator>

                            <h3 className="text-xl mt-2 font-medium">Minimum fuss</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">All recipes are designed to make eating healthy quick and easy.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                    color='lightblue'
                                />
                            </CardDecorator>

                            <h3 className="text-xl mt-2 font-medium">Search in seconds</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Filter by name or ingredient jump straight to the recipe you need.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
