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


// Description of Mimosa sousae
const Mimosa_sousae = new Mimosa()
Mimosa_sousae.specificEpithet = 'sousae'

Mimosa_sousae.stems = new Stems()

Mimosa_sousae.stipule = new Stipule()
Mimosa_sousae.stipule.margin = new MarginStipule()
Mimosa_sousae.stipule.adaxial = new AdaxialStipule()
Mimosa_sousae.stipule.abaxial = new AbaxialStipule()

Mimosa_sousae.leaf = new Leaf()
Mimosa_sousae.leaf.petiole = new Petiole()
Mimosa_sousae.leaf.bipinnate = new Bipinnate()
Mimosa_sousae.leaf.bipinnate.rachis = new Rachis()
Mimosa_sousae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sousae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sousae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sousae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sousae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sousae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sousae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sousae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sousae.inflorescence = new Inflorescence()
Mimosa_sousae.inflorescence.peduncle = new Peduncle()
Mimosa_sousae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sousae.flower = new Flower()
Mimosa_sousae.flower.bracteole = new Bracteole()
Mimosa_sousae.flower.calyx = new Calyx()
Mimosa_sousae.flower.calyx.shape = 'paleaceous'
Mimosa_sousae.flower.corolla = new Corolla()

Mimosa_sousae.androecium = new Androecium()
Mimosa_sousae.androecium.filaments = new Filaments()
Mimosa_sousae.androecium.filaments.colour = 'pinkish'

Mimosa_sousae.ginoecium = new Ginoecium()
Mimosa_sousae.ginoecium.ovary = new Ovary()

Mimosa_sousae.fruit = new Fruit()
Mimosa_sousae.fruit.stipe = new Stipe()
Mimosa_sousae.fruit.replum = new Replum()
Mimosa_sousae.fruit.epicarp = new Epicarp()

Mimosa_sousae.seed = new Seed()


// Description authorship
Mimosa_sousae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sousae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa sousae
export { Mimosa_sousae }