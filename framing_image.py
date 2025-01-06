from PIL import Image, ImageOps

# Load the image uploaded by the user
image_path = "/mnt/data/image.png"
image = Image.open(image_path)

# Add a frame around the image
frame_color = (169, 124, 81)  # Brownish frame color to give a painting-like effect
frame_width = 50  # Width of the frame
framed_image = ImageOps.expand(image, border=frame_width, fill=frame_color)

# Save the framed image
output_path = "/mnt/data/framed_image.png"
framed_image.save(output_path)

output_path
