import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const DesignSystemTest: React.FC = () => {
    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
                    Design System Test
                </h1>

                {/* Color System Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Color System
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-primary-500 p-4 rounded-lg text-white text-center">
                            <p className="font-semibold">Primary 500</p>
                            <p className="text-sm opacity-90">#c4a882</p>
                        </div>
                        <div className="bg-secondary-500 p-4 rounded-lg text-white text-center">
                            <p className="font-semibold">Secondary 500</p>
                            <p className="text-sm opacity-90">#e8e8e8</p>
                        </div>
                        <div className="bg-accent-500 p-4 rounded-lg text-white text-center">
                            <p className="font-semibold">Accent 500</p>
                            <p className="text-sm opacity-90">#f59e0b</p>
                        </div>
                        <div className="bg-gray-500 p-4 rounded-lg text-white text-center">
                            <p className="font-semibold">Gray 500</p>
                            <p className="text-sm opacity-90">#6b7280</p>
                        </div>
                    </div>
                </section>

                {/* Typography System Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Typography System
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-6xl font-serif font-bold text-gray-900">Heading 1 - 6xl</h1>
                            <p className="text-gray-600">This is a sample paragraph with base text size</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-serif font-bold text-gray-900">Heading 2 - 5xl</h2>
                            <p className="text-lg text-gray-600">This is a larger paragraph with lg text size</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-serif font-bold text-gray-900">Heading 3 - 4xl</h3>
                            <p className="text-base text-gray-600">This is a normal paragraph with base text size</p>
                        </div>
                    </div>
                </section>

                {/* Spacing System Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Spacing System
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 border">
                            <p className="mb-2">Small spacing (sm): 1rem</p>
                            <div className="bg-primary-100 h-4 mb-2"></div>
                            <p className="mb-4">Medium spacing (md): 1.5rem</p>
                            <div className="bg-primary-200 h-6 mb-2"></div>
                            <p className="mb-6">Large spacing (lg): 2rem</p>
                            <div className="bg-primary-300 h-8"></div>
                        </div>
                    </div>
                </section>

                {/* Button Component Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Button Components
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" size="sm">Primary Small</Button>
                        <Button variant="primary" size="md">Primary Medium</Button>
                        <Button variant="primary" size="lg">Primary Large</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Button variant="secondary" size="sm">Secondary Small</Button>
                        <Button variant="secondary" size="md">Secondary Medium</Button>
                        <Button variant="secondary" size="lg">Secondary Large</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Button variant="outline" size="sm">Outline Small</Button>
                        <Button variant="outline" size="md">Outline Medium</Button>
                        <Button variant="outline" size="lg">Outline Large</Button>
                    </div>
                </section>

                {/* Card Component Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Card Components
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Basic Card</h3>
                                <p className="text-gray-600">This is a basic card component with default styling.</p>
                            </div>
                        </Card>
                        <Card hover>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Hover Card</h3>
                                <p className="text-gray-600">This card has hover effects enabled.</p>
                            </div>
                        </Card>
                        <Card gradient>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Gradient Card</h3>
                                <p className="text-white/90">This card has a gradient background.</p>
                            </div>
                        </Card>
                        <Card hover gradient>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Hover Gradient Card</h3>
                                <p className="text-white/90">This card has both hover and gradient effects.</p>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Animation Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Animation System
                    </h2>
                    <div className="space-y-4">
                        <div className="animate-fade-in-up">
                            <Card>
                                <div className="p-4">
                                    <p className="text-gray-700">Fade In Up Animation</p>
                                </div>
                            </Card>
                        </div>
                        <div className="animate-slide-in-left animation-delay-200">
                            <Card>
                                <div className="p-4">
                                    <p className="text-gray-700">Slide In Left Animation (200ms delay)</p>
                                </div>
                            </Card>
                        </div>
                        <div className="animate-slide-in-right animation-delay-400">
                            <Card>
                                <div className="p-4">
                                    <p className="text-gray-700">Slide In Right Animation (400ms delay)</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Responsive Test */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                        Responsive Design
                    </h2>
                    <div className="bg-white p-4 rounded-lg border">
                        <p className="text-gray-700 mb-4">
                            This section tests responsive behavior. Resize your browser to see how the layout adapts.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-primary-100 p-4 rounded text-center">
                                <p className="text-sm font-medium text-primary-800">Column 1</p>
                            </div>
                            <div className="bg-primary-200 p-4 rounded text-center">
                                <p className="text-sm font-medium text-primary-800">Column 2</p>
                            </div>
                            <div className="bg-primary-300 p-4 rounded text-center">
                                <p className="text-sm font-medium text-primary-800">Column 3</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DesignSystemTest;
