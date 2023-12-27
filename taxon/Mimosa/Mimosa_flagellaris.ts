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


// Description of Mimosa flagellaris
const Mimosa_flagellaris = new Mimosa()
Mimosa_flagellaris.specificEpithet = 'flagellaris'

Mimosa_flagellaris.stems = new Stems()

Mimosa_flagellaris.stipule = new Stipule()
Mimosa_flagellaris.stipule.margin = new MarginStipule()
Mimosa_flagellaris.stipule.adaxial = new AdaxialStipule()
Mimosa_flagellaris.stipule.abaxial = new AbaxialStipule()

Mimosa_flagellaris.leaf = new Leaf()
Mimosa_flagellaris.leaf.petiole = new Petiole()
Mimosa_flagellaris.leaf.bipinnate = new Bipinnate()
Mimosa_flagellaris.leaf.bipinnate.rachis = new Rachis()
Mimosa_flagellaris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_flagellaris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_flagellaris.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_flagellaris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_flagellaris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_flagellaris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_flagellaris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 12)
Mimosa_flagellaris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_flagellaris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_flagellaris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_flagellaris.inflorescence = new Inflorescence()
Mimosa_flagellaris.inflorescence.peduncle = new Peduncle()
Mimosa_flagellaris.inflorescence.capitate = new CapitateInflorescence()

Mimosa_flagellaris.flower = new Flower()
Mimosa_flagellaris.flower.bracteole = new Bracteole()
Mimosa_flagellaris.flower.merism = '4-merous'
Mimosa_flagellaris.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_flagellaris.flower.calyx = new Calyx()
Mimosa_flagellaris.flower.corolla = new Corolla()
Mimosa_flagellaris.flower.corolla.shape = 'funnelform'

Mimosa_flagellaris.androecium = new Androecium()
Mimosa_flagellaris.androecium.filaments = new Filaments()
Mimosa_flagellaris.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_flagellaris.ginoecium = new Ginoecium()
Mimosa_flagellaris.ginoecium.ovary = new Ovary()

Mimosa_flagellaris.fruit = new Fruit()
Mimosa_flagellaris.fruit.stipe = new Stipe()
Mimosa_flagellaris.fruit.replum = new Replum()
Mimosa_flagellaris.fruit.epicarp = new Epicarp()

Mimosa_flagellaris.seed = new Seed()


// Description authorship
Mimosa_flagellaris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_flagellaris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa flagellaris
export { Mimosa_flagellaris }