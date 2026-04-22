# frozen_string_literal: true

# Jekyll ships LiveReload by injecting a document.write() snippet into HTML as it
# is served. That fails in some embedded browser previews and when localhost
# resolves to IPv6 while the LiveReload socket is bound to IPv4.
#
# Together with a normal <script src="http://127.0.0.1:PORT/livereload.js"> in
# _layouts/default.html (development only), this pass-through replaces that
# injection so the browser loads livereload.js from 127.0.0.1 explicitly.
#
# Not run on GitHub Pages (safe mode). Only affects `jekyll serve --livereload`.

module Jekyll
  module Commands
    class Serve
      class Servlet
        class BodyProcessor
          def process!
            @new_body = []
            if @body.respond_to?(:each)
              begin
                @body.each { |line| @new_body << line.to_s }
              ensure
                @body.close
              end
            else
              @new_body = @body.lines
            end
            joined = @new_body.join
            @content_length = joined.bytesize
            @new_body = joined
            @livereload_added = false
            @processed = true
          end
        end
      end
    end
  end
end
