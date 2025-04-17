import React, { useState } from 'react';
import { MapPin, Mail, Phone, Check, Loader2, Feather } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Schema definition
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", data);
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      toast.success("Your message has been sent. We look forward to connecting with you soon.");
      form.reset();

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-santaran-cream opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-santaran-jade opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 relative">
          <h2 className="heading-lg text-santaran-teal mb-4 font-serif">Connect With Our Circle</h2>
          <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
            Share your thoughts, questions, or visions. Every message begins a new thread in our collective tapestry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm shadow-lg border border-santaran-jade/10">
            <h3 className="heading-md text-santaran-terracotta mb-6 font-serif">Pathways to Connect</h3>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="mr-4 mt-1 p-3 rounded-full bg-gradient-to-br from-santaran-teal to-santaran-jade text-white shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-santaran-indigo">Studio Sanctuary</h4>
                  <p className="text-gray-600">Chittagong, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mr-4 mt-1 p-3 rounded-full bg-gradient-to-br from-santaran-teal to-santaran-jade text-white shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-santaran-indigo">Digital Messages</h4>
                  <p className="text-gray-600">contact@santaranart.org</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mr-4 mt-1 p-3 rounded-full bg-gradient-to-br from-santaran-teal to-santaran-jade text-white shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-santaran-indigo">Voice Connection</h4>
                  <p className="text-gray-600">+880 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-santaran-cream/30 to-white p-8 rounded-lg shadow-lg border border-santaran-jade/10 relative">
            <h3 className="heading-md text-santaran-terracotta mb-6 font-serif">Share Your Thoughts</h3>

            {submitSuccess && (
              <Alert className="mb-6 bg-santaran-jade/10 border-santaran-jade text-santaran-indigo animate-fade-in">
                <Check className="h-4 w-4 text-santaran-jade" />
                <AlertTitle>Message Received</AlertTitle>
                <AlertDescription>
                  Thank you for reaching out. Your words have begun a new thread in our artistic dialogue.
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-santaran-indigo">Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="How shall we address you?" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-santaran-indigo">Your Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="Where can we reach you?" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-santaran-indigo">Your Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} placeholder="What would you like to share with us?" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending your message...
                    </>
                  ) : (
                    <>
                      Send Your Message
                      <Feather size={18} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
