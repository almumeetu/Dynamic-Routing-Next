import HotDealSlider from "@/Components/ui/HotDealSlider";



export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">Contact</h1>
      <p className="text-lg text-black max-w-xl text-center">
        This is the Contact page. Here you can add information about your app, team, or anything you want!
      </p>
      <HotDealSlider />
    </main>
  );
}
