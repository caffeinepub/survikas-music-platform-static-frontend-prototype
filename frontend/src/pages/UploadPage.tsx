import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Music, Image, FileAudio, Info, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function UploadPage() {
  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Upload Your Music</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your creativity with the world. Upload your tracks and join competitions
          </p>
        </section>

        {/* Upload Guidelines */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Upload Guidelines:</strong> Supported formats: MP3, WAV, FLAC. Maximum file size: 100MB.
            Make sure you own all rights to the music you upload.
          </AlertDescription>
        </Alert>

        {/* Upload Form */}
        <Card>
          <CardHeader>
            <CardTitle>Track Details</CardTitle>
            <CardDescription>
              Fill in the information about your track
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Audio File Upload */}
            <div className="space-y-2">
              <Label htmlFor="audio-file">Audio File *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-not-allowed opacity-60">
                <FileAudio className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm font-medium mb-1">Drop your audio file here</p>
                <p className="text-xs text-muted-foreground mb-4">
                  or click to browse (MP3, WAV, FLAC - Max 100MB)
                </p>
                <Button disabled variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Select File
                </Button>
              </div>
            </div>

            {/* Cover Art Upload */}
            <div className="space-y-2">
              <Label htmlFor="cover-art">Cover Art *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-not-allowed opacity-60">
                <Image className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm font-medium mb-1">Upload cover artwork</p>
                <p className="text-xs text-muted-foreground mb-4">
                  JPG or PNG - Recommended: 3000x3000px
                </p>
                <Button disabled variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Select Image
                </Button>
              </div>
            </div>

            {/* Track Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Track Title *</Label>
              <Input
                id="title"
                placeholder="Enter your track title"
                disabled
                className="opacity-60"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell us about your track..."
                rows={4}
                disabled
                className="opacity-60"
              />
            </div>

            {/* Genre Selection */}
            <div className="space-y-2">
              <Label htmlFor="genre">Genre *</Label>
              <Select disabled>
                <SelectTrigger className="opacity-60">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pop">Pop</SelectItem>
                  <SelectItem value="rock">Rock</SelectItem>
                  <SelectItem value="electronic">Electronic</SelectItem>
                  <SelectItem value="hip-hop">Hip Hop</SelectItem>
                  <SelectItem value="jazz">Jazz</SelectItem>
                  <SelectItem value="classical">Classical</SelectItem>
                  <SelectItem value="indie">Indie</SelectItem>
                  <SelectItem value="acoustic">Acoustic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Competition Selection */}
            <div className="space-y-2">
              <Label htmlFor="competition">Submit to Competition (Optional)</Label>
              <Select disabled>
                <SelectTrigger className="opacity-60">
                  <SelectValue placeholder="Select a competition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summer">Summer Vibes Challenge</SelectItem>
                  <SelectItem value="electronic">Electronic Beats Battle</SelectItem>
                  <SelectItem value="acoustic">Acoustic Sessions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Add tags separated by commas (e.g., chill, summer, upbeat)"
                disabled
                className="opacity-60"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button disabled className="flex-1" size="lg">
                <Upload className="mr-2 h-5 w-5" />
                Upload Track
              </Button>
              <Button disabled variant="outline" size="lg">
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upload Tips */}
        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3">
              <Music className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">High-Quality Audio</p>
                <p className="text-sm text-muted-foreground">
                  Upload the highest quality version of your track for the best listening experience
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Eye-Catching Cover Art</p>
                <p className="text-sm text-muted-foreground">
                  A professional cover image helps your track stand out and attract more listeners
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Detailed Description</p>
                <p className="text-sm text-muted-foreground">
                  Tell your story - what inspired the track, the creative process, or the message behind it
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
