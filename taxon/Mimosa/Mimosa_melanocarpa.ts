// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa melanocarpa
const Mimosa_melanocarpa = new Mimosa()
Mimosa_melanocarpa.specificEpithet = 'melanocarpa'

Mimosa_melanocarpa.stems = new Stems()

Mimosa_melanocarpa.stipule = new Stipule()
Mimosa_melanocarpa.stipule.margin = new MarginStipule()
Mimosa_melanocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_melanocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_melanocarpa.leaf = new Leaf()
Mimosa_melanocarpa.leaf.petiole = new Petiole()
Mimosa_melanocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_melanocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_melanocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_melanocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_melanocarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(9, 16)
Mimosa_melanocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_melanocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_melanocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_melanocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_melanocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_melanocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_melanocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_melanocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_melanocarpa.inflorescence = new Inflorescence()
Mimosa_melanocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_melanocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_melanocarpa.flower = new Flower()
Mimosa_melanocarpa.flower.bracteole = new Bracteole()
Mimosa_melanocarpa.flower.calyx = new Calyx()
Mimosa_melanocarpa.flower.corolla = new Corolla()
Mimosa_melanocarpa.flower.corolla.shape = 'funnelform'

Mimosa_melanocarpa.androecium = new Androecium()
Mimosa_melanocarpa.androecium.filaments = new Filaments()
Mimosa_melanocarpa.androecium.filaments.colour = 'pinkish'

Mimosa_melanocarpa.ginoecium = new Ginoecium()
Mimosa_melanocarpa.ginoecium.ovary = new Ovary()

Mimosa_melanocarpa.fruit = new Fruit()
Mimosa_melanocarpa.fruit.stipe = new Stipe()
Mimosa_melanocarpa.fruit.replum = new Replum()
Mimosa_melanocarpa.fruit.epicarp = new Epicarp()

Mimosa_melanocarpa.seed = new Seed()


// Description authorship
Mimosa_melanocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_melanocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa melanocarpa
export { Mimosa_melanocarpa }